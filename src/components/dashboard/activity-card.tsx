import React, { useState, useEffect } from "react";
import { CardHeader } from "./activity/card-header";
import { FilterButtons } from "./activity/filter-button";
import { SortDropdown } from "./activity/sort-dropdown";
import { ReferralSkeleton } from "./skeleton/referral-skeleton";
import { EmptyState } from "./activity/empty-state";
import { ReferralCard } from "./activity/referral-info-card";
import { Pagination } from "./activity/pagination";
import {
  Referral,
  SortBy,
  SortOrder,
  StatusFilter,
} from "@/types/referral-type";
import { useQuery } from "@tanstack/react-query";
import { referralApi } from "@/tanstack/api-services/referral-api";

export const ReferralHistoryCard = () => {
  const [referrals, setReferrals] = useState<Referral[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [sortBy, setSortBy] = useState<SortBy>("createdAt");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");

  const { data:response, isPending } = useQuery({
    queryKey: ["Referral", currentPage, statusFilter, sortBy, sortOrder],
    queryFn: () =>
      referralApi.getReferredUsers({
        page: currentPage,
        limit: 5,
        status: statusFilter !== "all" ? statusFilter : "",
        sortBy,
        sortOrder,
      }),
  });

  const itemsPerPage = response?.metadata?.limit || 5;

  useEffect(() => {
    if (response) {
      loadReferrals();
    } else {
      setLoading(false);
    }
  }, [response, currentPage, statusFilter, sortBy, sortOrder]);


  const loadReferrals = async () => {
    if (!response) {
      setLoading(false);
      return;
    }

    setLoading(true);

    try {
      let filteredData = [...response.data];

      // Apply status filter
      if (statusFilter !== "all") {
        filteredData = filteredData.filter(
          (ref) => ref.status === statusFilter,
        );
      }

      // Apply sorting
      filteredData.sort((a, b) => {
        const aValue =
          sortBy === "createdAt"
            ? new Date(a.createdAt).getTime()
            : a.referredId.name.toLowerCase();
        const bValue =
          sortBy === "createdAt"
            ? new Date(b.createdAt).getTime()
            : b.referredId.name.toLowerCase();

        if (sortOrder === "asc") {
          return aValue > bValue ? 1 : -1;
        }
        return aValue < bValue ? 1 : -1;
      });

      // Apply pagination
      const startIndex = (currentPage - 1) * itemsPerPage;
      const paginatedData = filteredData.slice(
        startIndex,
        startIndex + itemsPerPage,
      );

      setReferrals(paginatedData);
      setTotalCount(filteredData.length);
    } catch (error) {
      console.error("Error loading referrals:", error);
      setReferrals([]);
      setTotalCount(0);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const handleFilterChange = (filter: StatusFilter) => {
    setStatusFilter(filter);
    setCurrentPage(1);
  };

  const handleSortChange = (newSortBy: SortBy, newSortOrder: SortOrder) => {
    setSortBy(newSortBy);
    setSortOrder(newSortOrder);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(totalCount / itemsPerPage);

  return (
    <div className="my-6 rounded-xl border border-gray-100 bg-white shadow-lg">
      <CardHeader
        title="Your Referral History"
        subtitle="Track and manage your referrals"
      />

      <div className="border-b border-gray-200 bg-white px-6 py-4">
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <FilterButtons
            activeFilter={statusFilter}
            onFilterChange={handleFilterChange}
          />
          <SortDropdown
            sortBy={sortBy}
            sortOrder={sortOrder}
            onSortChange={handleSortChange}
          />
        </div>
      </div>

      <div className="p-6">
        {loading ? (
          <div className="space-y-3">
            {Array.from({ length: itemsPerPage }).map((_, i) => (
              <ReferralSkeleton key={i} />
            ))}
          </div>
        ) : !response || referrals.length === 0 ? (
          <EmptyState statusFilter={statusFilter} />
        ) : (
          <div className="space-y-3">
            {referrals.map((referral) => (
              <ReferralCard
                key={referral._id}
                referral={referral}
                formatDate={formatDate}
              />
            ))}
          </div>
        )}
      </div>

      {!loading && response && referrals.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalCount={totalCount}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

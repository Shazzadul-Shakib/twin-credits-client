import React, { useState } from "react";
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
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [sortBy, setSortBy] = useState<SortBy>("createdAt");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { data: response, isPending } = useQuery({
    queryKey: ["Referral", currentPage, statusFilter, sortBy, sortOrder],
    queryFn: () =>
      referralApi.getReferredUsers({
        page: currentPage,
        limit: 5,
        status: statusFilter !== "all" ? statusFilter : "",
        sortBy,
        sortOrder,
      }),
    refetchInterval: 1000,
    refetchIntervalInBackground: true,
  });

  const referrals: Referral[] = response?.data || [];
  const metadata = response?.metadata || {};
  const totalPages = Math.ceil(
    (metadata.totalCount || 0) / (metadata.limit || 5),
  );

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
        {isPending ? (
          <div className="space-y-3">
            {Array.from({ length: metadata.limit || 5 }).map((_, i) => (
              <ReferralSkeleton key={i} />
            ))}
          </div>
        ) : referrals.length === 0 ? (
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

      {!isPending && referrals.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalCount={metadata.totalCount || 0}
          itemsPerPage={metadata.limit || 5}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

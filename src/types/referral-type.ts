export type TReferralMetadata = {
  totalCount: number;
  completedCount: number;
  pendingCount: number;
  limit:number;
  page: number;
};

export interface ReferredUser {
  _id: string;
  name: string;
}

export interface Referral {
  _id: string;
  referrerId: string;
  referredId: ReferredUser;
  status: "pending" | "completed";
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  statusCode: number;
  data: Referral[];
  metadata: {
    totalCount: number;
    pendingCount: number;
    completedCount: number;
    limit:number;
    page: number;
  };
}

export type StatusFilter = "all" | "pending" | "completed";
export type SortBy = "createdAt" | "name";
export type SortOrder = "asc" | "desc";

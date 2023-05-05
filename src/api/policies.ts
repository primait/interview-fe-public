import { mockPolicies } from "./__mocks__/mockPolicies";

export interface Policy {
  policyId: string;
  customerNationalId: string;
  customerName: string;
  vrn: string;
  startDate: string;
  endDate: string;
}

export function getPolicies(): Policy[] {
  return mockPolicies;
}

import { Policy } from "../api/policies";

export function Aside(policy: Policy) {
  return (
    <aside>
      <h2>{policy.policyId}</h2>
      <dl>
        <dt>Customer name</dt>
        <dd>{policy.customerName}</dd>
        <dt>Customer national id</dt>
        <dd>{policy.customerNationalId}</dd>
        <dt>Vehicle registration</dt>
        <dd>{policy.vrn}</dd>
        <dt>Policy start date</dt>
        <dd></dd>
        <dt>Policy end date</dt>
        <dd></dd>
      </dl>
    </aside>
  );
}

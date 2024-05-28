import React from "react";
import { BaseDropdown } from "../BaseDropdown";
import useHttpQuery from "src/hooks/useHttpQuery";
import { QueryKeys } from "src/services/queryKey";
import parsePaginatedResponse from "src/utils/parsePagignatedResponse";
import HttpQueryGuard from "src/Guards/HttpQueryGuard";
import { LoadingProgress } from "src/components/LoadingProgress/LoadingProgress";
import AdmissionQuotaService from "src/services/api/MasterSettingService/AdmissionQuotaService";

function AdmissionQuotaDropdown({ props, label, helperText, error }: any) {
  const quotaQuery = useHttpQuery({
    key: QueryKeys.getAdmissionQuota,
    apiFn: AdmissionQuotaService.getAll,
    apiFnArgs: [],
  });

  const {
    update: options,
    totalCount,
    totlaPages,
  } = parsePaginatedResponse(quotaQuery.data);

  return (
    <>
      <HttpQueryGuard
        queries={[quotaQuery]}
        loadingContent={<LoadingProgress p={3} />}
      >
        {() => {
          return (
            <BaseDropdown
              props={props}
              options={options}
              label={label}
              error={error}
              helperText={helperText}
            />
          );
        }}
      </HttpQueryGuard>
    </>
  );
}

export { AdmissionQuotaDropdown };

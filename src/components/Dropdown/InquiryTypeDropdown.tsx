import React, { useState } from "react";
import useHttpQuery from "src/hooks/useHttpQuery";
import { QueryKeys } from "src/services/queryKey";
import parsePaginatedResponse from "src/utils/parsePagignatedResponse";
import inquiryTypeService from "src/services/api/MasterSettingService/inquiryTypeService";
import { BaseDropdown } from "./BaseDropdown";
import HttpQueryGuard from "src/Guards/HttpQueryGuard";
import { LoadingProgress } from "../LoadingProgress/LoadingProgress";

function InquiryTypeDropdown({ props, label, helperText, error }: any) {
  const inquiryQuery = useHttpQuery({
    key: QueryKeys.getAllInquiryType,
    apiFn: inquiryTypeService.getAll,
  });

  const {
    update: options,
    totalCount,
    totlaPages,
  } = parsePaginatedResponse(inquiryQuery.data);

  return (
    <>
      <HttpQueryGuard
        queries={[inquiryQuery]}
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

export { InquiryTypeDropdown };

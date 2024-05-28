import React, { useState } from "react";
import useHttpQuery from "src/hooks/useHttpQuery";
import { QueryKeys } from "src/services/queryKey";
import parsePaginatedResponse from "src/utils/parsePagignatedResponse";
import FeesTypeService from "src/services/api/MasterSettingService/FeesTypeService";
import { BaseDropdown } from "../BaseDropdown";
import HttpQueryGuard from "src/Guards/HttpQueryGuard";
import { LoadingProgress } from "src/components/LoadingProgress/LoadingProgress";

function StudentFeesTypeDropdown({ props, label, helperText, error }: any) {
  const studentFeesQuery = useHttpQuery({
    key: QueryKeys.getAllFeesType,
    apiFn: FeesTypeService.getAllFeesType,
    apiFnArgs: [],
  });

  const {
    update: options,
    totalCount,
    totlaPages,
  } = parsePaginatedResponse(studentFeesQuery.data);

  return (
    <>
      <HttpQueryGuard
        queries={[studentFeesQuery]}
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

export { StudentFeesTypeDropdown };

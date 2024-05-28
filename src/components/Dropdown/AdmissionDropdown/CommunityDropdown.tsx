import React, { useState } from "react";
import { BaseDropdown } from "../BaseDropdown";
import useHttpQuery from "src/hooks/useHttpQuery";
import { QueryKeys } from "src/services/queryKey";
import CategoryService from "src/services/api/MasterSettingService/CategoryService";
import parsePaginatedResponse from "src/utils/parsePagignatedResponse";
import HttpQueryGuard from "src/Guards/HttpQueryGuard";
import { LoadingProgress } from "src/components/LoadingProgress/LoadingProgress";

function CommunityDropdown({ props, label, helperText, error }: any) {
  const categoryQuery = useHttpQuery({
    key: QueryKeys.all_CastCategory,
    apiFn: CategoryService.getAll,
    apiFnArgs: [],
  });
  const {
    update: options,
    totalCount,
    totlaPages,
  } = parsePaginatedResponse(categoryQuery.data);

  return (
    <>
      <HttpQueryGuard
        queries={[categoryQuery]}
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

export { CommunityDropdown };

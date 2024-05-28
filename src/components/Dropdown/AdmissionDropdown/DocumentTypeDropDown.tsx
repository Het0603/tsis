import React, { useState } from "react";
import { BaseDropdown } from "../BaseDropdown";
import useHttpQuery from "src/hooks/useHttpQuery";
import { QueryKeys } from "src/services/queryKey";
import DocumentTypeService from "src/services/api/MasterSettingService/DocumentTypeService";
import parsePaginatedResponse from "src/utils/parsePagignatedResponse";
import HttpQueryGuard from "src/Guards/HttpQueryGuard";
import { LoadingProgress } from "src/components/LoadingProgress/LoadingProgress";

function DocumentTypeDropdown({ props, label, helperText, error }: any) {
  const documentQuery = useHttpQuery({
    key: QueryKeys.getAllDocumentType,
    apiFn: DocumentTypeService.getAll,
  });

  const {
    update: options,
    totalCount,
    totlaPages,
  } = parsePaginatedResponse(documentQuery.data);

  return (
    <>
      <HttpQueryGuard
        queries={[documentQuery]}
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

export { DocumentTypeDropdown };

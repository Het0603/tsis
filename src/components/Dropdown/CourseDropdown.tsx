import React, { useState } from "react";
import { BaseDropdown } from "./BaseDropdown";
import useHttpQuery from "src/hooks/useHttpQuery";
import { QueryKeys } from "src/services/queryKey";
import parsePaginatedResponse from "src/utils/parsePagignatedResponse";
import CourseService from "src/services/api/MasterSettingService/CourseService";
import HttpQueryGuard from "src/Guards/HttpQueryGuard";
import { LoadingProgress } from "../LoadingProgress/LoadingProgress";

function CourseDropdown({ props, label, helperText, error }: any) {
  const courseQuery = useHttpQuery({
    key: QueryKeys.getAllCourse,
    apiFn: CourseService.currentCourse,
  });

  const {
    update: options,
    totalCount,
    totlaPages,
  } = parsePaginatedResponse(courseQuery.data);

  return (
    <>
      <HttpQueryGuard
        queries={[courseQuery]}
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

export { CourseDropdown };

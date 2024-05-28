import React, { useState } from "react";
import { BaseDropdown } from "./BaseDropdown";
import useHttpQuery from "src/hooks/useHttpQuery";
import { QueryKeys } from "src/services/queryKey";
import parsePaginatedResponse from "src/utils/parsePagignatedResponse";
import CourseService from "src/services/api/MasterSettingService/CourseService";
import HttpQueryGuard from "src/Guards/HttpQueryGuard";
import { LoadingProgress } from "../LoadingProgress/LoadingProgress";

function CompletedCourseDropdown({ props, label, helperText, error }: any) {
  const completedCourseQuery = useHttpQuery({
    key: QueryKeys.getAllCompletedCourse,
    apiFn: CourseService.allCourse,
  });

  const {
    update: options,
    totalCount,
    totlaPages,
  } = parsePaginatedResponse(completedCourseQuery.data);

  return (
    <>
      <HttpQueryGuard
        queries={[completedCourseQuery]}
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

export { CompletedCourseDropdown };

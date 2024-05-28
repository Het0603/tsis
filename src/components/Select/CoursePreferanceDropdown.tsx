import useHttpQuery from "src/hooks/useHttpQuery";
import BaseSelect from "./BaseSelect";
import { QueryKeys } from "src/services/queryKey";
import CourseService from "src/services/api/MasterSettingService/CourseService";
import parsePaginatedResponse from "src/utils/parsePagignatedResponse";
import HttpQueryGuard from "src/Guards/HttpQueryGuard";
import { LoadingProgress } from "../LoadingProgress/LoadingProgress";

export default function CoursePreferanceDropdown({
  name,
  value,
  onChange,
  title,
  helperText,
}: any) {
  const courseQuery = useHttpQuery({
    key: QueryKeys.getAllCourse,
    apiFn: CourseService.getAll,
    apiFnArgs: [],
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
            <BaseSelect
              props={{
                name,
                value,
                onChange: (e: any) => {
                  const selectedValue = e.target.value;
                  onChange(selectedValue);
                },
                title,
              }}
              options={options}
              helperText={helperText}
            />
          );
        }}
      </HttpQueryGuard>
    </>
  );
}

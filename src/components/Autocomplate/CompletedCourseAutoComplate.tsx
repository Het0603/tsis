import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import { BaseAutoComplate } from "./BaseAutoComplate";
import { QueryKeys } from "src/services/queryKey";
import CourseService from "src/services/api/MasterSettingService/CourseService";

function CompletedCourseAutoComplate({ props, config }: any) {
  return (
    <>
      <BaseAutoComplate
        props={{
          ...props,
          startdecorator: <PlaylistAddCheckIcon />,
          queryfnconfig: {
            key: QueryKeys.getAllCompletedCourse,
            apiFn: CourseService.allCourse,
          },
        }}
        config={{ ...config }}
      />
    </>
  );
}
export { CompletedCourseAutoComplate };

import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import { BaseAutoComplate } from "./BaseAutoComplate";
import { QueryKeys } from "src/services/queryKey";
import CourseService from "src/services/api/MasterSettingService/CourseService";

function CourseAutoComplate({ props, config }: any) {
  return (
    <>
      <BaseAutoComplate
        props={{
          ...props,
          startdecorator: <PlaylistAddCheckIcon />,
          queryfnconfig: {
            key: QueryKeys.getAllCourse,
            apiFn: CourseService.currentCourse,
          },
        }}
        config={{ ...config }}
      />
    </>
  );
}
export { CourseAutoComplate };

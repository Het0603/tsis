import { ErrorAlert } from "src/components/Alerts";
import { LoadingProgress } from "src/components/LoadingProgress/LoadingProgress";

function HttpQueryGuard({
  disableErrorGuard = false,
  disableLoadingGuard = false,
  errorContent,
  forceShowErrorContent = false, // Only used for testing error content UI
  forceShowLoadingContent = false, // Only used for testing loading content UI
  loadingContent,
  queries,
  children,
}: any) {
  const hasError = !!queries.find((q: any) => !!q.error);
  const isLoading = !!queries.find((q: any) => q.status === "loading");

  if (forceShowErrorContent || (!disableLoadingGuard && isLoading)) {
    return loadingContent !== undefined ? loadingContent : <LoadingProgress />;
  }

  if (forceShowErrorContent || (!disableErrorGuard && hasError)) {
    return errorContent !== undefined ? (
      errorContent
    ) : (
      <div
        style={{
          marginTop: 10,
        }}
      >
        <ErrorAlert>{`An error occurred while loading this data. Please try again.`}</ErrorAlert>
      </div>
    );
  }

  return children ? children() : null;
}

export default HttpQueryGuard;

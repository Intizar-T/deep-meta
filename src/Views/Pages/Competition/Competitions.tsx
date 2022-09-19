import GridCompetitons from "./GridCompetitions";
import ListCompetitions from "./ListCompetitions";
import { useResizeDetector } from "react-resize-detector";

interface CompetitionsProps {
  gridView?: boolean;
}

function Competitions({ gridView }: CompetitionsProps) {
  const { width, ref } = useResizeDetector();

  return (
    <div
      ref={ref}
      className={`w-full h-full flex flex-${
        gridView ? "row" : "col"
      } flex-wrap justify-center`}
    >
      {gridView ? GridCompetitons() : ListCompetitions(width)}
    </div>
  );
}

export default Competitions;

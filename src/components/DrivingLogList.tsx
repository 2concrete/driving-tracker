type Supervisor = {
  name: string;
  nickname: string;
  license: number;
};
type DrivingLogEntry = {
  startTime: string;
  finishTime: string;
  date: string;
  supervisor: Supervisor;
};

type DrivingLogListProps = {
  drivingLog: DrivingLogEntry[];
};

const DrivingLogList = ({ drivingLog }: DrivingLogListProps) => {
  return (
    <div className="border-1 border-neutral-400 h-100 rounded shadow-xl px-1.5 py-0.5">
      {drivingLog.map((drivingLog, index) => (
        <div key={index} className="flex gap-10">
          <div className="flex gap-2 items-center">
            <p>{drivingLog.startTime}</p>
            <div className="w-20 h-0.5 bg-neutral-600 flex items-center relative top-0.5">
              <div className="border-1 bg-white w-2 h-2 rounded-full absolute -left-1" />
              <div className="border-1 bg-white  w-2 h-2 rounded-full absolute -right-1" />
            </div>
            <p>{drivingLog.finishTime}</p>
          </div>
          <div>
            <p>{drivingLog.supervisor.nickname}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DrivingLogList;

import { Link } from "react-router";
import ScoreCircle from "~/components/ScoreCircle";
import { useEffect, useState } from "react";
import { usePuterStore } from "~/lib/puter";
import toast from "react-hot-toast";

const ResumeCard = ({
  resume: { id, companyName, jobTitle, feedback, imagePath, resumePath },
  onDelete,
}: {
  resume: Resume;
  onDelete?: (id: string) => void;
}) => {
  const { fs, kv } = usePuterStore();
  const [resumeUrl, setResumeUrl] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const loadResume = async () => {
      const blob = await fs.read(imagePath);
      if (!blob) return;
      let url = URL.createObjectURL(blob);
      setResumeUrl(url);
    };

    loadResume();
  }, [imagePath]);

  const handleDelete = async () => {
    const files = (await fs.readDir("./")) as FSItem[];
    const fileToDelete = files.find((file) => file.path === resumePath);

    if (fileToDelete) {
      await fs.delete(fileToDelete.path);
      await kv.delete(`resume:${id}`);
      toast.success("Resume deleted successfully.");
      onDelete?.(id);
    } else {
      toast.error("Resume file not found.");
    }
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        to={`/resume/${id}`}
        className="resume-card animate-in fade-in duration-1000"
      >
        <div className="resume-card-header">
          <div className="flex flex-col gap-2">
            {companyName && (
              <h2 className="!text-black font-bold break-words">
                {companyName}
              </h2>
            )}
            {jobTitle && (
              <h3 className="text-lg break-words text-gray-500">{jobTitle}</h3>
            )}
            {!companyName && !jobTitle && (
              <h2 className="!text-black font-bold">Resume</h2>
            )}
          </div>
          <div className="flex-shrink-0">
            <ScoreCircle score={feedback.overallScore} />
          </div>
        </div>
        {resumeUrl && (
          <div className="gradient-border animate-in fade-in duration-1000">
            <div className="w-full h-full">
              <img
                src={resumeUrl}
                alt="resume"
                className="w-full h-[350px] max-sm:h-[200px] object-cover object-top"
              />
            </div>
          </div>
        )}
      </Link>
      {isHovered && (
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleDelete();
          }}
          className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105 border border-red-400 hover:border-red-300 z-10"
          title="Delete resume"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </div>
  );
};
export default ResumeCard;

export const useStage = () => {
  const stage = import.meta.env.VITE_STAGE;

  return {
    stage,
  };
};

export const useStageText = () => {
  const { stage } = useStage();

  const text = `This application's stage is [${stage}]`;

  return {
    text,
  };
};

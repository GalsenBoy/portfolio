export const animateRef = (deley:number,stagger:number) => {
  const animeRef = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: deley,
        staggerChildren: stagger,
      },
    },
  };

  return animeRef;
};

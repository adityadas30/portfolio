import sys

def main():
    path = "/Users/adityadas/portfolio-v2/src/app/page.tsx"
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    # 1. Nav:
    content = content.replace(
        'className="bg-white/80 backdrop-blur-md px-6 py-3 rounded-full border border-gray-200 shadow-sm flex gap-6 text-[11px] font-medium tracking-wider text-gray-500 uppercase"',
        'className="bg-white/80 backdrop-blur-md px-5 md:px-6 py-3 rounded-full border border-gray-200 shadow-sm flex gap-4 md:gap-6 text-[9px] md:text-[11px] font-medium tracking-wider text-gray-500 uppercase font-mono overflow-x-auto whitespace-nowrap hide-scrollbar max-w-[90vw]"'
    )

    # 2. Hero Name Block (Replacing the whole AnimatedHeroName function)
    old_hero = '''function AnimatedHeroName() {
  const [fontIndex, setFontIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isInView || !isDesktop) return;
    
    const interval = setInterval(() => {
      setFontIndex((prev) => (prev + 1) % heroFonts.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isInView, isDesktop]);

  if (!isDesktop) {
    return (
      <h1 className="text-5xl md:text-[7rem] font-bold tracking-tighter leading-none mb-4 font-hero text-white whitespace-pre">
        Aditya Das
      </h1>
    );
  }

  return (
    <div ref={containerRef} className="text-5xl md:text-[7rem] font-bold tracking-tighter leading-none mb-4 h-20 md:h-[8rem] flex items-center relative overflow-hidden text-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={fontIndex}
          initial={{ opacity: 0, rotateX: 30, y: 10 }}
          animate={{ opacity: 1, rotateX: 0, y: 0 }}
          exit={{ opacity: 0, rotateX: -30, y: -10 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 flex items-center whitespace-pre z-10"
          style={{ fontFamily: heroFonts[fontIndex] }}
        >
          {`Aditya Das`}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}'''
    
    new_hero = '''function AnimatedHeroName() {
  const [mounted, setMounted] = useState(false);
  const [fontIndex, setFontIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const interval = setInterval(() => {
      setFontIndex((prev) => (prev + 1) % heroFonts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [mounted]);

  return (
    <>
      {/* Mobile static fallback */}
      <h1 className="md:hidden text-[2.75rem] sm:text-5xl font-bold tracking-tighter leading-none mb-4 font-hero text-white whitespace-pre">
        {`Aditya Das`}
      </h1>

      {/* Desktop animated block */}
      <div className="hidden md:flex text-[7rem] font-bold tracking-tighter leading-none mb-4 h-[8rem] items-center relative overflow-hidden text-white">
        {mounted ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={fontIndex}
              initial={{ opacity: 0, rotateX: 30, y: 10 }}
              animate={{ opacity: 1, rotateX: 0, y: 0 }}
              exit={{ opacity: 0, rotateX: -30, y: -10 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex items-center whitespace-pre z-10"
              style={{ fontFamily: heroFonts[fontIndex] }}
            >
              {`Aditya Das`}
            </motion.div>
          </AnimatePresence>
        ) : (
          <div className="absolute inset-0 flex items-center whitespace-pre z-10" style={{ fontFamily: heroFonts[0] }}>
              {`Aditya Das`}
          </div>
        )}
      </div>
    </>
  );
}'''
    
    content = content.replace(old_hero, new_hero)

    # 3. Hero Flex Centering
    content = content.replace(
        '          {/* Left Side: Text Details */}\n          <div className="flex flex-col">',
        '          {/* Left Side: Text Details */}\n          <div className="flex flex-col items-center text-center md:items-start md:text-left">'
    )

    # 4. Hero subtitle flex
    content = content.replace(
        '              className="flex items-center gap-3 text-[11px] md:text-sm font-medium tracking-widest text-gray-400 uppercase mt-6 mb-16"',
        '              className="flex items-center justify-center md:justify-start gap-3 flex-wrap md:flex-nowrap text-[10px] md:text-sm font-medium tracking-widest text-gray-400 uppercase mt-6 mb-12 md:mb-16"'
    )

    # 5. Hero social icons flex
    content = content.replace(
        '              className="flex gap-4"\n            >',
        '              className="flex justify-center md:justify-start gap-4"\n            >'
    )

    # 6. Music Card layout wrapper
    content = content.replace(
        '          {/* Right Side: Music Card */}\n          <div className="hidden md:flex justify-end lg:pr-12">',
        '          {/* Right Side: Music Card */}\n          <div className="flex justify-center md:justify-end lg:pr-12 w-full mt-8 md:mt-0">'
    )

    with open(path, "w", encoding="utf-8") as f:
        f.write(content)

    print("Success")

if __name__ == "__main__":
    main()

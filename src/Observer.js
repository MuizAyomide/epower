// const AnimatedComponent = () => {
//     const [isVisible, setIsVisible] = useState(false);
//     const ref = useRef();

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     setIsVisible(true);
//                     observer.disconnect(); // Stop observing after it becomes visible
//                 }
//             },
//             {
//                 threshold: 0.1, // Trigger when 10% of the element is visible
//             }
//         );

//         if (ref.current) {
//             observer.observe(ref.current);
//         }

//         return () => {
//             if (ref.current) {
//                 observer.unobserve(ref.current);
//             }
//         };
//     }, []);

//     return (
//         <div className="container">
//             <div
//                 ref={ref}
//                 className={`animated-box ${isVisible ? 'visible' : ''}`}
//             >
//                 Animate Me!
//             </div>
//         </div>
//     );
// };

// export default AnimatedComponent;
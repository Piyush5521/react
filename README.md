# react
sw (stopwatch)

#TypeScript

To run react with TypeScript follow these Steps:
# 1 npx create-react-app app_name --template TypeScript
# 2 npm start
# 3 npx tsc -init
# 4 tsc --watch
# 5 change code of reportWebVitals.ts with this 
    import { MetricType } from "web-vitals";
     
    const reportWebVitals = (onPerfEntry?: (metric: MetricType) => void) => {
      if (onPerfEntry && onPerfEntry instanceof Function) {
        import("web-vitals").then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => 
    {
           onCLS(onPerfEntry);
           onINP(onPerfEntry);
           onFCP(onPerfEntry);
           onLCP(onPerfEntry);
           onTTFB(onPerfEntry);
         });
       }
     };
    
     export default reportWebVitals;
# 6 In tsconfig.json file uncomment "jsx" : and set its value -> "react-jsx"

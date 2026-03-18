import { useState, useEffect } from 'react';

export interface Project {
  title: string;
  tech: string;
  desc: string;
  role: string;
  github: string;
}

const RAW_XML = `
<projects>
    <project>
        <title>A Museum Anomaly</title>
        <tech>UE5, C++</tech>
        <desc>A psychological thriller game with custom anomaly detection logic built in Unreal Engine 5. Collaborated with Ritam Chatterjee.</desc>
        <role>Lead Developer (C++)</role>
        <github>https://github.com/mitadru-karmakar</github>
    </project>
    <project>
        <title>Netflix EDA App</title>
        <tech>Python, Streamlit</tech>
        <desc>IBM internship project analyzing Netflix viewer retention and content growth through interactive visualizations built with Streamlit.</desc>
        <role>Data Analyst</role>
        <github>https://github.com/mitadru-karmakar</github>
    </project>
    <project>
        <title>The Final Climb</title>
        <tech>UE5 Blueprints</tech>
        <desc>A physics-based platformer game focusing on performance optimization. Collaborated with Syed Meraj Ahmed.</desc>
        <role>Physics Optimizer</role>
        <github>https://github.com/mitadru-karmakar</github>
    </project>
</projects>
`;

export function useProjectsXml() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isParsing, setIsParsing] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      setIsParsing(true);
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(RAW_XML, "text/xml");
      
      // Check for parsing errors
      const parseError = xmlDoc.getElementsByTagName("parsererror");
      if (parseError.length > 0) {
        throw new Error("Failed to parse XML");
      }

      const projectNodes = xmlDoc.getElementsByTagName("project");
      const parsedProjects: Project[] = Array.from(projectNodes).map(node => ({
        title: node.getElementsByTagName("title")[0]?.textContent || "Untitled",
        tech: node.getElementsByTagName("tech")[0]?.textContent || "Unknown Tech",
        desc: node.getElementsByTagName("desc")[0]?.textContent || "No description provided.",
        role: node.getElementsByTagName("role")[0]?.textContent || "Contributor",
        github: node.getElementsByTagName("github")[0]?.textContent || "#"
      }));

      // Artificial delay to demonstrate parsing state
      setTimeout(() => {
        setProjects(parsedProjects);
        setIsParsing(false);
      }, 600);
      
    } catch (err) {
      console.error("XML Parsing Error:", err);
      setError(err instanceof Error ? err.message : "Unknown error occurred while parsing XML");
      setIsParsing(false);
    }
  }, []);

  return { projects, isParsing, error };
}

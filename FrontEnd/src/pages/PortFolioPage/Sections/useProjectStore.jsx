// stores/projectStore.js
import create from 'zustand';

const useProjectStore = create((set) => ({
  projects: [],

  // 프로젝트 추가
  addProject: (project) => set((state) => ({
    projects: [...state.projects, project]
  })),

  // 서브 섹션 추가
  addSubSection: (projectId, subSection) => set((state) => ({
    projects: state.projects.map(project =>
      project.id === projectId ? { ...project, subSections: [...project.subSections, subSection] } : project
    )
  })),
}));

export default useProjectStore;

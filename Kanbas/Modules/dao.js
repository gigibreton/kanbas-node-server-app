import Database from "../Database/index.js";
export function updateModule(moduleId, moduleUpdates) {
    const { modules } = Database;
    const index = modules.findIndex(module => module._id === moduleId);
    if (index != -1)
        modules[index] = { ...modules[index], ...moduleUpdates };
    return modules[index];
}
export function deleteModule(moduleId) {
    const { modules } = Database;
    Database.modules = modules.filter((module) => module._id !== moduleId);
}
export function createModule(module) {
    const newModule = { ...module, _id: Date.now().toString() };
    Database.modules = [...Database.modules, newModule];
    return newModule;
}
export function findModulesForCourse(courseId) {
    const { modules } = Database;
    return modules.filter((module) => module.course === courseId);
}

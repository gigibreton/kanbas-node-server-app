import Database from "../Database/index.js";
export function updateAssignment(assignmentId, assignmentUpdates) {
    const { assignments } = Database;
    const index = assignments.findIndex(assignment => assignment._id === assignmentId);
    if (index != -1)
        assignments[index] = { ...assignments[index], ...assignmentUpdates };
    return assignments[index];
}
export function deleteAssignment(assignmentId) {
    const { assignments } = Database;
    Database.assignments = assignments.filter((assignment) => assignment._id !== assignmentId);
}
export function getAssignments(courseId) {
    const { assignments } = Database;
    return assignments.filter((assignment) => assignment.course === courseId);
}
export function createAssignment(assignment) {
    const newAssignment = { ...assignment, _id: Date.now().toString() };
    Database.assignments = [...Database.assignments, newAssignment];
    return newAssignment;
}
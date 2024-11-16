import Database from "../Database/index.js";
export function enrollUser(userId, courseId) {
    const enrollment = {
        _id: Date.now().toString(),
        user: userId,
        course: courseId,
    };
    Database.enrollments.push(enrollment);
    return enrollment;
}
export function unenrollUser(userId, courseId) {
    const { enrollments } = Database;
    Database.enrollments = enrollments.filter((e) => !(e.user == userId && e.course == courseId));
}
export function getEnrollments(userId) {
    const enrollments = Database.enrollments.filter((e) => e.user === userId);
    return enrollments;
}
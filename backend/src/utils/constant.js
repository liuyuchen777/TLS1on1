import createEnum from "./enum";

const Roles = createEnum({
    STUDENT: [0, "student role, able to start conversation with teacher, view/edit own profile"],
    TEACHER: [1, "teacher role, able to view/edit profile and choose what information to show, reply in conversation"],
    ADMIN: [2, "all permissionas of student and teacher, view/edit all profiles"]
});

const Targets = createEnum({
    UNV_APPLY: [0, ""]
    // TODO
})

export {
    Roles,
    Targets
}
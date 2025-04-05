export const UserRolesEnum = {
  ADMIN: "admin",
  PROJECT_ADMIN: "project_admin",
  MEMBER: "member",
};
export const AvailableUserRoles = Object.values(userRolesEnum);

export const TaskStatusEnum = {
  TODO: "todo",
  IN_PROGRESS: "in-progress",
  DONE: "done",
};

export const AvailableTaskStatuses = Object.values(TaskStatusEnum);

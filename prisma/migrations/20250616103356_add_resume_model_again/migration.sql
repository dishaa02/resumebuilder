-- CreateTable
CREATE TABLE "Resume" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "summary" TEXT,
    "title" TEXT,
    "experienceJson" TEXT NOT NULL,
    "educationJson" TEXT NOT NULL,
    "skillsJson" TEXT NOT NULL,
    "projectsJson" TEXT NOT NULL,
    "additionalInfoJson" TEXT NOT NULL,
    "resumeTitle" TEXT,
    "templateId" TEXT NOT NULL,
    CONSTRAINT "Resume_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

export const getLocalizedPeriod = (startedAt: Date, endedAt?: Date) => {
  const formatDate = (date: Date) =>
    date.toLocaleDateString("en-US", { month: "short", year: "numeric" });

  const startedLabel = formatDate(startedAt);
  const endedLabel = endedAt ? formatDate(endedAt) : "Present";

  if (!endedAt) {
    endedAt = new Date();
  }

  let years = endedAt.getFullYear() - startedAt.getFullYear();
  let months = endedAt.getMonth() - startedAt.getMonth();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const period =
    years > 0
      ? `${years} yr${years > 1 ? "s" : ""}${months > 0 ? ` ${months} mo${months > 1 ? "s" : ""}` : ""}`
      : `${months} mo${months > 1 ? "s" : ""}`;

  return { startedLabel, endedLabel, period };
};

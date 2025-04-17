export function formatCounts(count) {
  if (count >= 1_000_000_000) {
    return (count / 1_000_000_000).toFixed(1) + 'B'
  } else if (count >= 1_000_000) {
    return (count / 1_000_000).toFixed(1) + 'M'
  } else if (count >= 1_000) {
    return (count / 1_000).toFixed(1) + 'K'
  }
  return count.toString()
}

export function formatDate(dateString) {
  return new Date(dateString)?.toISOString().split("T")[0]
}
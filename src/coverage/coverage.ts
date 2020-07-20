export function isStringLong(input: string): boolean {  // 1
  if (input.length > 5) {                               // 1
    return true;                                        // 2
  }

  return false;                                         // 1
}

function getValueByPath(obj: any, path: string): any {
  return path
    .split(".")
    .reduce((acc, part) => (acc ? acc[part] : undefined), obj);
}

export { getValueByPath };

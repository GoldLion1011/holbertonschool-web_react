import { schema, normalize } from 'normalizr';

const courseSchema = new schema.Entity('courses');

const coursesNormalizer = (data) => {
  const normalizedData = normalize(data, [courseSchema]);
  return normalizedData;
}

export default coursesNormalizer;

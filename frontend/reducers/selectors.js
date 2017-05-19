import { values } from 'lodash';

export const selectAllPhotos = ({ photos }) => values(photos);
export const selectPhoto = (id, {photos}) => values(photos)[id - 1];

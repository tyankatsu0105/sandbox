// import { getOptions } from 'loader-utils';
// import validateOptions from 'schema-utils';

// const schema = {
//   type: 'object',
//   properties: {
//     test: {
//       type: 'string'
//     }
//   }
// };

// export default function(source) {
//   return 1
//   const options = getOptions(this);

//   validateOptions(schema, options, 'Example Loader');

//   // Apply some transformations to the source...

//   return `export default ${ JSON.stringify(source) }`;
// }

export default function(source) {
  return source
}
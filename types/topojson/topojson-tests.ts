import * as topojson from 'topojson';

// TODO: complete tests.

topojson.feature(null, null); // $ExpectType { features: any[]; }
topojson.mesh(null, null, (a: any, b: any) => a !== b); // $ExpectType { type: any; coordinates: any[]; }

import unNest from './unNest';

//========================================================================================
/*                                                                                      *
 *                                 getViewPropsFromData                                 *
 *                            rawData = Raw data from server                            *
 *                 eg: {person: {details: {personal: {name: "david"}}}}                 *
 *       PROP_PATHS_FROM_RAW = An object w/ view props and the path from raw data       *
 *                      eg: {name: 'person.details.personal.name'}                      *
 *                                                                                      */
//========================================================================================

export default function getViewPropsFromData(rawData, PROP_PATHS_FROM_RAW) {
	const mappedData = {};
	const viewProps = Object.keys(PROP_PATHS_FROM_RAW);

	for (let i = 0; i < viewProps.length; i++) {
		const prop = viewProps[i];
		if (PROP_PATHS_FROM_RAW[prop]) {
			mappedData[prop] = unNest(rawData, PROP_PATHS_FROM_RAW[prop]);
		}
	}
	return mappedData;
}

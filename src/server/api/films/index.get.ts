import axios from "@/lib/axios";
import _ from "lodash";

export default defineEventHandler(async (event) => {
  const params = getQuery(event);

  /**
   * Check if the search param is defined
   */
  if(_.isEmpty(params.s)) {
    throw createError({
      statusCode: 400,
      statusMessage: "invalid query",
      message: "key 's' is required on query params"
    })
  }
  
  /**
   * Get the data from API
   */
  let { data } = await axios.get('/', {
    params
  })
  return data
})
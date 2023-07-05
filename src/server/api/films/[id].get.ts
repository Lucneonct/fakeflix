import axios from "@/lib/axios";
import _ from "lodash";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");

  /**
   * Verify the correct ID to prevent invalid fetchings
   */
  if(id && id.length < 5) {
    throw createError({
      statusCode: 400,
      statusMessage: "invalid id",
      message: "the 'ID' length is invalid"
    })
  }
  
  /**
   * Get the data from API
   */
  let { data } = await axios.get('/', {
    params: {
      i: id
    }
  })
  return data
})
<template>
    <div class="relative bg-white sm:rounded-lg rounded-md p-6 scrollbar-thin scrollbar-thumb-black scrollbar-track-gray-300 overflow-y-scroll absolute h-128 my-10 ml-12 w-full">
            <table
              class="w-full text-md text-left text-gray-500 dark:text-gray-400 "
            >
              <thead
                class="text-md text-gray-700 dark:bg-gray-700 border-b dark:text-gray-400"
              >
                <tr>
                  <th scope="col" class="px-6 py-3 mr-4">Date</th>
                  <th scope="col" class="px-6 py-3">Request Name</th>
                  <th scope="col" class="px-6 py-3">Last Modified</th>
                  <th scope="col" class="px-6 py-3">Status</th>
                  <th scope="col" class="px-6 py-3">Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td
                    
                    class="px-6 py-4"
                  >
                  31/02/2021
                  </td>
                  <td class="px-6 py-4 break-all">Access to OSS</td>
                  <td class="px-6 py-4">31/02/2021</td>
                  <td class="px-6 py-4">In Progress</td>
                  <td class="px-6 py-4 text-right">
                    <a
                      href="#"
                      class="font-medium text-white bg-black rounded-full py-1 px-6 "
                      >Edit</a
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
</template>
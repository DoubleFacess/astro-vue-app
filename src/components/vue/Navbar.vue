<template>
    <nav class="border-b bg-white dark:bg-zinc-800 dark:border-zinc-700">
      <div
        class="flex items-baseline justify-end sm:justify-between p-4 max-w-screen-xl mx-auto"
      >
        <a href="/" class="hidden sm:block font-semibold dark:text-white"
          >Astro</a
        >
        <div>
          <ul class="font-medium flex items-baseline gap-8">
            <li>
              <a
                href="/dashboard"
                class="block text-zinc-900 dark:text-gray-200">Dashboard</a
              >
            </li>
            <li>
              <a href="/test/login" class="block text-zinc-900 dark:text-gray-200"
                >Sign in</a
              >
            </li>
            <li>
              <a href="/test/register" class="block text-zinc-900 dark:text-gray-200"
                >Register</a
              >
            </li>
            <li>
              <a href="/test/signin" class="block text-zinc-900 dark:text-gray-200"
                >Sign in</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>
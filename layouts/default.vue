<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/">Index</NuxtLink>

        <span> | </span>

        <NuxtLink to="/about">About</NuxtLink>

        <span> | </span>

        <NuxtLink to="/custom">Custom</NuxtLink>

        <span> | </span>

        <NuxtLink to="/test">Test</NuxtLink>
      </nav>
    </header>

    <main>
      <slot />
    </main>
  </div>
</template>
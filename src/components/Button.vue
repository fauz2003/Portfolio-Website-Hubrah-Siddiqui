<script setup lang="ts">
type Variant = 'primary' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

withDefaults(
  defineProps<{
    variant?: Variant
    size?: Size
    as?: 'button' | 'a'
    href?: string
    disabled?: boolean
  }>(),
  {
    variant: 'primary',
    size: 'md',
    as: 'button',
    disabled: false,
  },
)

const base =
  'group/btn relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 ease-out [&>svg]:shrink-0 disabled:pointer-events-none disabled:opacity-50'

const variants: Record<Variant, string> = {
  primary:
    'bg-bordeaux text-paper shadow-[0_14px_30px_-10px_rgba(138,45,45,0.7)] hover:bg-bordeaux-deep hover:-translate-y-0.5 hover:shadow-[0_20px_44px_-12px_rgba(138,45,45,0.75)] active:translate-y-0',
  outline:
    'bg-transparent text-ink ring-1 ring-line-strong hover:ring-bordeaux hover:text-bordeaux hover:-translate-y-0.5',
  ghost: 'bg-ink/[0.04] text-ink hover:bg-ink/[0.08] hover:-translate-y-0.5',
}

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-sm sm:text-base',
  lg: 'px-7 py-3.5 text-base',
}
</script>

<template>
  <component
    :is="as === 'a' ? 'a' : 'button'"
    :href="as === 'a' ? href : undefined"
    :disabled="as === 'button' ? disabled : undefined"
    :class="[base, variants[variant], sizes[size]]"
  >
    <slot />
  </component>
</template>

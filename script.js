(() => {
  const deviceLinks = document.querySelectorAll('[data-device]')

  deviceLinks.forEach((link) => {
    link.addEventListener('click', () => {
      const device = link.dataset.device
      if (device) localStorage.setItem('enigma-device', device)
    })
  })

  const editor = document.querySelector('[data-editor]') || document.querySelector('#script-editor')
  const runPreview = document.querySelector('[data-run-preview]')
  const clearEditor = document.querySelector('[data-clear-editor]')
  const output = document.querySelector('[data-output]')
  const outputState = document.querySelector('[data-output-state]')

  clearEditor?.addEventListener('click', () => {
    if (editor instanceof HTMLTextAreaElement) editor.value = ''
    if (output) output.textContent = 'Editor cleared. Ready for a new local preview.'
    if (outputState) outputState.textContent = 'Ready'
  })

  runPreview?.addEventListener('click', () => {
    if (!(editor instanceof HTMLTextAreaElement)) return
    const lines = editor.value.split('\n').filter((line) => line.trim()).length
    if (output) output.textContent = `Local preview queued.\n${lines} non-empty line${lines === 1 ? '' : 's'} detected.\n\nRuntime integration is not connected yet.`
    if (outputState) outputState.textContent = 'Previewed'
  })
})()

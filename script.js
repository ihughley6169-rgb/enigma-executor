(() => {
  const settingsButton = document.querySelector('[data-settings]')
  const settingsPanel = document.querySelector('[data-settings-panel]')
  const menuButton = document.querySelector('[data-menu]')
  const menuPanel = document.querySelector('[data-menu-panel]')
  const label = document.querySelector('[data-platform-label]')
  const platformButtons = document.querySelectorAll('[data-platform]')

  const closePanels = () => {
    if (settingsPanel) settingsPanel.hidden = true
    if (menuPanel) menuPanel.hidden = true
  }

  settingsButton?.addEventListener('click', () => {
    if (!settingsPanel) return
    settingsPanel.hidden = !settingsPanel.hidden
    if (!settingsPanel.hidden && menuPanel) menuPanel.hidden = true
  })

  menuButton?.addEventListener('click', () => {
    if (!menuPanel) return
    menuPanel.hidden = !menuPanel.hidden
    if (!menuPanel.hidden && settingsPanel) settingsPanel.hidden = true
  })

  platformButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const platform = button.dataset.platform || 'Windows'
      if (label) label.textContent = platform
      platformButtons.forEach((item) => item.classList.toggle('active', item === button))
    })
  })

  document.addEventListener('click', (event) => {
    const target = event.target
    if (!(target instanceof Node)) return
    if (!settingsPanel?.contains(target) && !settingsButton?.contains(target) && !menuPanel?.contains(target) && !menuButton?.contains(target)) closePanels()
  })
})()

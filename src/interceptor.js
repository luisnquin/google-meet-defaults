const USE_MICROPHONE_KEY = 'USE_MICROPHONE',
    USE_CAMERA_KEY = 'USE_CAMERA',
    AUTH_USER_KEY = 'AUTH_USER'

const transformUrl = (authUser) => {
    const url = window.location.href

    const result = new URL(url)
    result.searchParams.set('authuser', `${authUser}`)

    return result.toString()
}

const setStoredAuthUser = async () => {
    const { key: authUser } = await chrome.storage.local.get([AUTH_USER_KEY])
    if (!authUser) return

    window.location.href = transformUrl(authUser)
}

setStoredAuthUser()

chrome.storage.local.set([USE_MICROPHONE_KEY], true)
chrome.storage.local.set([USE_CAMERA_KEY], true)
chrome.storage.local.set([AUTH_USER_KEY], 1)

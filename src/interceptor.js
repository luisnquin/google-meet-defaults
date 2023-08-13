const USE_MICROPHONE_KEY = 'USE_MICROPHONE',
    USE_CAMERA_KEY = 'USE_CAMERA',
    AUTH_USER_KEY = 'AUTH_USER'

const AUTH_USER_SEARCH_PARAM_KEY = 'authuser'

const transformUrl = (authUser) => {
    const url = new URL(window.location.href)
    url.searchParams.set(AUTH_USER_SEARCH_PARAM_KEY, `${authUser}`)

    return url.toString()
}

const setStoredAuthUser = async () => {
    const result = await chrome.storage.local.get([AUTH_USER_KEY])
    if (!result) return

    const authUser = result[AUTH_USER_KEY]
    if (!authUser) return

    const params = new URLSearchParams(window.location.search)

    if (params.get(AUTH_USER_SEARCH_PARAM_KEY) == authUser) {
        return
    }

    window.location.href = transformUrl(authUser)
}

setStoredAuthUser()

const items = {}
items[USE_MICROPHONE_KEY] = true
items[USE_CAMERA_KEY] = true
items[AUTH_USER_KEY] = 1
chrome.storage.local.set(items)

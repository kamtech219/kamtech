from playwright.sync_api import sync_playwright

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        page.on("console", lambda msg: print(f"Console {msg.type}: {msg.text}"))
        page.on("pageerror", lambda exc: print(f"Uncaught exception: {exc}"))

        page.goto("http://localhost:3000")
        page.wait_for_timeout(2000)

        browser.close()

if __name__ == "__main__":
    main()

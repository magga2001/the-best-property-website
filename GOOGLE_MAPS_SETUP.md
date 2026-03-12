# Google Maps Integration Setup

## How to Get Your Google Maps API Key

### Step 1: Go to Google Cloud Console
1. Visit: https://console.cloud.google.com/
2. Sign in with your Google account

### Step 2: Create a New Project (if needed)
1. Click on the project dropdown at the top
2. Click "New Project"
3. Enter a name like "The Best Property Website"
4. Click "Create"

### Step 3: Enable Google Maps APIs
1. Go to "APIs & Services" > "Library"
2. Search for and enable these APIs:
   - **Maps Embed API** (for embedded maps)
   - **Maps JavaScript API** (optional, for advanced features)
   - **Places API** (optional, for location search)

### Step 4: Create API Key
1. Go to "APIs & Services" > "Credentials"
2. Click "+ CREATE CREDENTIALS" > "API Key"
3. Copy your API key

### Step 5: Restrict Your API Key (Important for Security)
1. Click on your newly created API key
2. Under "API restrictions":
   - Select "Restrict key"
   - Check "Maps Embed API"
   - Check other APIs you enabled
3. Under "Website restrictions":
   - Add your domain (e.g., `yourwebsite.com/*`)
   - For development, you can add `localhost/*` or `127.0.0.1/*`
4. Click "Save"

### Step 6: Update Your Code
Replace `YOUR_GOOGLE_MAPS_API_KEY` in `/app/properties/[id]/page.tsx` with your actual API key.

Find this line:
```typescript
src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${property.coordinates.lat},${property.coordinates.lng}&zoom=15`}
```

Replace with:
```typescript
src={`https://www.google.com/maps/embed/v1/place?key=AIza...your-actual-key&q=${property.coordinates.lat},${property.coordinates.lng}&zoom=15`}
```

## Better Approach: Use Environment Variables

### 1. Create `.env.local` file in your project root:
```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
```

### 2. Update the code to use environment variable:
```typescript
src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${property.coordinates.lat},${property.coordinates.lng}&zoom=15`}
```

### 3. Add `.env.local` to `.gitignore` to keep your API key secure:
```
# .gitignore
.env.local
```

## Property Coordinates

The following coordinates are set for each property:

1. **The Best Yuwittaya** - Bangkok: `13.7563, 100.5018`
2. **The Best Masterpiece** - Lamlukka: `14.0412, 100.6534`
3. **The Best Courtyard** - Klong 8: `13.8021, 100.6190`
4. **The Best Lamlukka Klong 6**: `14.0356, 100.6789`
5. **The Best Lamlukka Klong 8**: `14.0489, 100.6912`
6. **The Best Premium** - Central Bangkok: `13.7565, 100.5231`

**Note:** These are example coordinates. You should update them with the actual property locations.

## Features Included

✅ **Embedded Google Map** - Shows property location
✅ **Location Information** - Address and nearby amenities
✅ **Coordinates Display** - Latitude and longitude
✅ **Open in Google Maps** - Direct link to Google Maps
✅ **Get Directions** - Direct link to navigation
✅ **Responsive Design** - Works on all devices
✅ **Premium Styling** - Matches your website design

## Pricing

- **Free Tier**: $200 monthly credit (approximately 28,000 map loads per month)
- Maps Embed API: $7 per 1,000 loads
- This should be more than enough for most websites!

## Tips

1. **Always use API restrictions** to prevent unauthorized use
2. **Monitor your usage** in Google Cloud Console
3. **Set billing alerts** to avoid unexpected charges
4. **Use caching** to reduce API calls if needed
5. **Test thoroughly** before going live

## Need Help?

- [Google Maps Platform Documentation](https://developers.google.com/maps/documentation)
- [Maps Embed API Guide](https://developers.google.com/maps/documentation/embed/get-started)
- [Pricing Calculator](https://mapsplatform.google.com/pricing/)

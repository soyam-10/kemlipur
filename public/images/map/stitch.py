from PIL import Image

# 3 columns (x: 48417, 48418, 48419) x 5 rows (y: 27668 to 27672)
cols = [48417, 48418, 48419]
rows = [27668, 27669, 27670, 27671, 27672]

tile_w, tile_h = 256, 256
result = Image.new("RGB", (tile_w * len(cols), tile_h * len(rows)))

for row_idx, y in enumerate(rows):
    for col_idx, x in enumerate(cols):
        filename = f"t_{y}_{x}.png"
        try:
            tile = Image.open(filename)
            result.paste(tile, (col_idx * tile_w, row_idx * tile_h))
            print(f"✓ {filename}")
        except Exception as e:
            print(f"✗ {filename} - {e}")

result.save("kemlipur-map.png")
print(f"\nDone! Saved as kemlipur-map.png ({tile_w * len(cols)}x{tile_h * len(rows)}px)")
